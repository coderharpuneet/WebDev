"""
Clean EDA and preprocessing workflow for the Medical Insurance dataset.

Run the complete file:
    python insurance_eda_preprocessing.py

Or open it in VS Code and run each `# %%` cell separately.
"""

# %% 1. Import the necessary libraries
from pathlib import Path

import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import seaborn as sns
from sklearn.compose import ColumnTransformer
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler


# %% 2. Configuration
DATA_PATH = Path(
    r"C:\Users\Dell\Documents\WebDev\Machine Learning\insurance.csv"
)
OUTPUT_DIR = Path(__file__).resolve().parent / "outputs"
PLOTS_DIR = OUTPUT_DIR / "plots"

OUTPUT_DIR.mkdir(exist_ok=True)
PLOTS_DIR.mkdir(exist_ok=True)

pd.set_option("display.max_columns", None)
pd.set_option("display.float_format", lambda value: f"{value:,.2f}")
sns.set_theme(style="whitegrid", context="notebook")


# %% 3. Load and preview the data
df = pd.read_csv(DATA_PATH)

print("First five rows:")
print(df.head())
print(f"\nDataset shape: {df.shape[0]} rows x {df.shape[1]} columns")


# %% 4. Understand the structure
print("\nColumn information:")
df.info()

print("\nData types:")
print(df.dtypes)

print("\nUnique values per column:")
print(df.nunique())


# %% 5. Data-quality checks
print("\nMissing values:")
print(df.isna().sum())

print("\nExact duplicate rows:", df.duplicated().sum())

categorical_columns = df.select_dtypes(include=["object", "category"]).columns
numerical_columns = df.select_dtypes(include=np.number).columns

print("\nCategorical value counts:")
for column in categorical_columns:
    print(f"\n{column}:")
    print(df[column].value_counts(dropna=False))


# %% 6. Descriptive statistics
print("\nNumerical summary:")
print(df[numerical_columns].describe().T)

print("\nCategorical summary:")
print(df[categorical_columns].describe().T)


# %% 7. Clean the data
clean_df = df.copy()

# Standardize column names and categorical text.
clean_df.columns = clean_df.columns.str.strip().str.lower()
categorical_columns = clean_df.select_dtypes(include=["object", "category"]).columns
for column in categorical_columns:
    clean_df[column] = clean_df[column].str.strip().str.lower()

# Remove only exact duplicate records.
rows_before = len(clean_df)
clean_df = clean_df.drop_duplicates().reset_index(drop=True)
print(f"\nRemoved {rows_before - len(clean_df)} exact duplicate row(s).")

# Validate values using knowledge of this dataset.
validation_checks = {
    "age outside 18-64": ~clean_df["age"].between(18, 64),
    "non-positive bmi": clean_df["bmi"] <= 0,
    "children outside 0-5": ~clean_df["children"].between(0, 5),
    "non-positive charges": clean_df["charges"] <= 0,
    "unexpected sex": ~clean_df["sex"].isin(["male", "female"]),
    "unexpected smoker": ~clean_df["smoker"].isin(["yes", "no"]),
    "unexpected region": ~clean_df["region"].isin(
        ["northeast", "northwest", "southeast", "southwest"]
    ),
}

print("\nDomain validation:")
for check_name, invalid_mask in validation_checks.items():
    print(f"{check_name}: {invalid_mask.sum()} invalid row(s)")


# %% 8. Univariate analysis
fig, axes = plt.subplots(2, 2, figsize=(13, 9))

sns.histplot(clean_df["age"], bins=20, kde=True, ax=axes[0, 0])
axes[0, 0].set_title("Age distribution")

sns.histplot(clean_df["bmi"], bins=25, kde=True, ax=axes[0, 1])
axes[0, 1].set_title("BMI distribution")

sns.countplot(data=clean_df, x="children", ax=axes[1, 0])
axes[1, 0].set_title("Number of children")

sns.histplot(clean_df["charges"], bins=30, kde=True, ax=axes[1, 1])
axes[1, 1].set_title("Insurance charges (right-skewed)")

fig.tight_layout()
fig.savefig(PLOTS_DIR / "numerical_distributions.png", dpi=150)
plt.close(fig)


# %% 9. Categorical analysis
fig, axes = plt.subplots(1, 3, figsize=(15, 4))

for axis, column in zip(axes, ["sex", "smoker", "region"]):
    sns.countplot(data=clean_df, x=column, ax=axis)
    axis.set_title(f"{column.title()} counts")
    axis.tick_params(axis="x", rotation=20)

fig.tight_layout()
fig.savefig(PLOTS_DIR / "categorical_counts.png", dpi=150)
plt.close(fig)


# %% 10. Bivariate and multivariate analysis
fig, axes = plt.subplots(1, 3, figsize=(17, 5))

sns.scatterplot(
    data=clean_df,
    x="age",
    y="charges",
    hue="smoker",
    alpha=0.75,
    ax=axes[0],
)
axes[0].set_title("Charges vs age")

sns.scatterplot(
    data=clean_df,
    x="bmi",
    y="charges",
    hue="smoker",
    alpha=0.75,
    ax=axes[1],
)
axes[1].set_title("Charges vs BMI")

sns.boxplot(data=clean_df, x="smoker", y="charges", ax=axes[2])
axes[2].set_title("Charges by smoking status")

fig.tight_layout()
fig.savefig(PLOTS_DIR / "relationships_with_charges.png", dpi=150)
plt.close(fig)

fig, axis = plt.subplots(figsize=(7, 5))
correlation = clean_df.select_dtypes(include=np.number).corr()
sns.heatmap(correlation, annot=True, cmap="coolwarm", fmt=".2f", ax=axis)
axis.set_title("Numeric correlation matrix")
fig.tight_layout()
fig.savefig(PLOTS_DIR / "correlation_heatmap.png", dpi=150)
plt.close(fig)

print("\nAverage and median charges by smoking status:")
print(
    clean_df.groupby("smoker")["charges"]
    .agg(["count", "mean", "median"])
    .round(2)
)


# %% 11. Inspect outliers with the IQR rule
def iqr_outlier_summary(data: pd.DataFrame, columns: list[str]) -> pd.DataFrame:
    """Return IQR bounds and outlier counts without deleting any observations."""
    rows = []
    for column in columns:
        q1 = data[column].quantile(0.25)
        q3 = data[column].quantile(0.75)
        iqr = q3 - q1
        lower_bound = q1 - 1.5 * iqr
        upper_bound = q3 + 1.5 * iqr
        outlier_count = (
            (data[column] < lower_bound) | (data[column] > upper_bound)
        ).sum()
        rows.append(
            {
                "column": column,
                "lower_bound": lower_bound,
                "upper_bound": upper_bound,
                "outlier_count": outlier_count,
            }
        )
    return pd.DataFrame(rows).set_index("column")


outlier_summary = iqr_outlier_summary(
    clean_df, ["age", "bmi", "children", "charges"]
)
print("\nIQR outlier summary:")
print(outlier_summary.round(2))

# Important: do not automatically delete these rows. High charges are meaningful
# outcomes, especially among smokers. A log target can be tested later for a linear
# regression model:
# y_log = np.log1p(clean_df["charges"])


# %% 12. Separate features and target
X = clean_df.drop(columns="charges")
y = clean_df["charges"]

# Split before fitting encoders/scalers to prevent information leakage.
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.20,
    random_state=42,
)

print("\nTraining feature shape:", X_train.shape)
print("Test feature shape:", X_test.shape)


# %% 13. Build a reusable preprocessing pipeline
numeric_features = ["age", "bmi", "children"]
categorical_features = ["sex", "smoker", "region"]

numeric_pipeline = Pipeline(
    steps=[
        ("scaler", StandardScaler()),
    ]
)

categorical_pipeline = Pipeline(
    steps=[
        (
            "one_hot_encoder",
            OneHotEncoder(
                handle_unknown="ignore",
                drop="first",
                sparse_output=False,
            ),
        ),
    ]
)

preprocessor = ColumnTransformer(
    transformers=[
        ("numeric", numeric_pipeline, numeric_features),
        ("categorical", categorical_pipeline, categorical_features),
    ],
    remainder="drop",
    verbose_feature_names_out=False,
)

# Learn scaling and encoding parameters from training data only.
X_train_processed_array = preprocessor.fit_transform(X_train)
X_test_processed_array = preprocessor.transform(X_test)

feature_names = preprocessor.get_feature_names_out()
X_train_processed = pd.DataFrame(
    X_train_processed_array,
    columns=feature_names,
    index=X_train.index,
)
X_test_processed = pd.DataFrame(
    X_test_processed_array,
    columns=feature_names,
    index=X_test.index,
)

print("\nProcessed feature names:")
print(feature_names.tolist())
print("\nProcessed training preview:")
print(X_train_processed.head())


# %% 14. Save clean and model-ready outputs
clean_df.to_csv(OUTPUT_DIR / "insurance_cleaned.csv", index=False)
X_train_processed.to_csv(OUTPUT_DIR / "X_train_processed.csv", index=False)
X_test_processed.to_csv(OUTPUT_DIR / "X_test_processed.csv", index=False)
y_train.to_csv(OUTPUT_DIR / "y_train.csv", index=False)
y_test.to_csv(OUTPUT_DIR / "y_test.csv", index=False)

print(f"\nSaved cleaned data, train/test data, and plots to: {OUTPUT_DIR}")

# The next modeling step can wrap `preprocessor` and an estimator in one Pipeline:
#
# from sklearn.linear_model import LinearRegression
#
# model = Pipeline(
#     steps=[
#         ("preprocessing", preprocessor),
#         ("regressor", LinearRegression()),
#     ]
# )
# model.fit(X_train, y_train)
