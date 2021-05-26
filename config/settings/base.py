"""
Django settings for bitmaker project.

Generated by '***REMOVED***-admin startproject' using Django 3.1.1.

For more information on this file, see
https://docs.***REMOVED***project.com/en/3.1/topics/settings/

For the full list of settings and their values, see
https://docs.***REMOVED***project.com/en/3.1/ref/settings/
"""

import environ
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent.parent

# Set environment variables from environment file
env = environ.Env(
    DB_NAME=(str, "bitmaker_db"),
    DB_USER=(str, "dummy"),
    DB_PASSWORD=(str, "dummy"),
    DB_HOST=(str, "db"),
    DB_PORT=(str, "3306"),
    CLUSTER_HOST=(str, "dummy"),
    CLUSTER_NAME=(str, "dummy"),
    REGISTRY_HOST=(str, "dummy"),
    REPOSITORY_NAME=(str, "dummy"),
    CELERY_BROKER_URL=(str, "redis://redis"),
    CELERY_RESULT_BACKEND=(str, "redis://redis:6379/0"),
)

environ.Env.read_env(env_file=".env")


# Quick-start development settings - unsuitable for production
# See https://docs.***REMOVED***project.com/en/3.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = "***REMOVED***"

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = []


# Application definition

DEFAULT_APPS = [
    "***REMOVED***.contrib.admin",
    "***REMOVED***.contrib.auth",
    "***REMOVED***.contrib.contenttypes",
    "***REMOVED***.contrib.sessions",
    "***REMOVED***.contrib.messages",
    "***REMOVED***.contrib.staticfiles",
]

THIRD_PARTY_APPS = [
    "***REMOVED***_celery_beat",
    "rest_framework",
    "rest_framework.authtoken",
]

PROJECT_APPS = [
    "api",
    "core",
]

INSTALLED_APPS = DEFAULT_APPS + THIRD_PARTY_APPS + PROJECT_APPS

MIDDLEWARE = [
    "***REMOVED***.middleware.security.SecurityMiddleware",
    "***REMOVED***.contrib.sessions.middleware.SessionMiddleware",
    "***REMOVED***.middleware.common.CommonMiddleware",
    "***REMOVED***.middleware.csrf.CsrfViewMiddleware",
    "***REMOVED***.contrib.auth.middleware.AuthenticationMiddleware",
    "***REMOVED***.contrib.messages.middleware.MessageMiddleware",
    "***REMOVED***.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "config.urls"

TEMPLATES = [
    {
        "BACKEND": "***REMOVED***.template.backends.***REMOVED***.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "***REMOVED***.template.context_processors.debug",
                "***REMOVED***.template.context_processors.request",
                "***REMOVED***.contrib.auth.context_processors.auth",
                "***REMOVED***.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "config.wsgi.application"


# Database
# https://docs.***REMOVED***project.com/en/3.1/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": "***REMOVED***.db.backends.mysql",
        "HOST": env("DB_HOST"),
        "PORT": env("DB_PORT"),
        "NAME": env("DB_NAME"),
        "USER": env("DB_USER"),
        "PASSWORD": env("DB_PASSWORD"),
    }
}


# Password validation
# https://docs.***REMOVED***project.com/en/3.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "***REMOVED***.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "***REMOVED***.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "***REMOVED***.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "***REMOVED***.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization
# https://docs.***REMOVED***project.com/en/3.1/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.***REMOVED***project.com/en/3.1/howto/static-files/

STATIC_URL = "/static/"


# Pagination settings used in api_app

API_PAGE_SIZE = 100  # Paginator page size
API_MAX_PAGE_SIZE = 100  # Maximum allowable requested page size


# Cluster Settings

CLUSTER_HOST = env("CLUSTER_HOST")
CLUSTER_NAME = env("CLUSTER_NAME")


# Container Registry Settings

REGISTRY_HOST = env("REGISTRY_HOST")
REPOSITORY_NAME = env("REPOSITORY_NAME")


# Celery settings

CELERY_BROKER_URL = env("CELERY_BROKER_URL")
CELERY_RESULT_BACKEND = env("CELERY_RESULT_BACKEND")
CELERY_BEAT_SCHEDULER = "***REMOVED***_celery_beat.schedulers:DatabaseScheduler"
