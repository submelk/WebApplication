__author__ = "NimaFakoor"
__version__ = '0.0.9'

import logging
logging.basicConfig(filename='logging/server.log',format='[%(funcName)s] - %(levelname)s [%(asctime)s] %(message)s' , level=logging.DEBUG) 

from App import application

SECRET_KEY = "carrot"
DATABASE = 'sqlite:///database//local_DB.db'
SQLALCHEMY_ECHO = True
UPLOAD_FOLDER = 'App\\static\\uploads'
CAPTCHA_CONFIG = {'SECRET_CAPTCHA_KEY':'wMmeltW4mhwidorQRli6Oijuhygtfgybunxx9VPXldz'}
SQLALCHEMY_TRACK_MODIFICATIONS = False

application.config["SECRET_KEY"] = SECRET_KEY
application.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
application.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = SQLALCHEMY_TRACK_MODIFICATIONS
application.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
application.config['SECRET_CAPTCHA_KEY'] = CAPTCHA_CONFIG
application.config['CAPTCHA_ENABLE'] = True
application.config['CAPTCHA_LENGTH'] = 5
application.config['CAPTCHA_WIDTH'] = 160
application.config['CAPTCHA_HEIGHT'] = 60
application.config['CAPTCHA_SESSION_KEY'] = 'captcha_image' # In case you want to use another key in your session to store the captcha:
application.config['SESSION_TYPE'] = 'sqlalchemy'
