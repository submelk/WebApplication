"""
The flask application package.
"""

from flask import Flask, url_for
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine

application = Flask(__name__)

from App.config import *
db = SQLAlchemy(application)

import App.views