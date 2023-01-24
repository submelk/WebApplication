from flask import Flask, render_template, abort, request, redirect, url_for, g, session, flash, jsonify
from tempfile import mkdtemp
from functools import wraps
from werkzeug.security import check_password_hash, generate_password_hash
from App import application, db
from App.modules.database import *