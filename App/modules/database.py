from werkzeug.security import generate_password_hash
from datetime import datetime, date
from App import db
from werkzeug.security import check_password_hash

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

# User


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=True)
    password = db.Column(db.String(100), nullable=True)
    phone = db.Column(db.String(100), nullable=True)  # unique=True
    role = db.Column(db.Integer, nullable=False, default=0)
    credit = db.Column(db.Integer, nullable=False, default=0)
    ldap = db.Column(db.DateTime, nullable=False,
                     default=datetime.now())  # Last Login Time

    def check_password(self, value):
        return check_password_hash(self.password, value)

# UserInformation
class UserInformation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    #
    user_id = db.Column(db.Integer, db.ForeignKey(
        'user.id'), nullable=False)  # unique=True,###########
    user = db.relationship('User', backref=db.backref(
        'user', lazy=True))  # view.py change
    #
    uname = db.Column(db.String(50), nullable=True)
    ufamily = db.Column(db.String(50), nullable=True)
    uiid = db.Column(db.String(50), nullable=True)
    ubirthday = db.Column(db.String(50), nullable=True)  # meli code
    uphone = db.Column(db.String(50), nullable=True)
    uemail = db.Column(db.String(50), nullable=True)
    uaddress = db.Column(db.Text, nullable=True)
    uverification = db.Column(db.String(50), nullable=True)
    uimage_file = db.Column(db.String(50), nullable=True, default='https://static.thenounproject.com/png/261694-200.png')

# Page
class Page(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    page_type = db.Column(db.String(100), nullable=True)
    page_name = db.Column(db.String(100), nullable=True)
    page_content = db.Column(db.Text, nullable=True)
    date = db.Column(db.DateTime, nullable=False, default=datetime.now())

# consultation
class Consultation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=True)
    telephone = db.Column(db.String(100), nullable=True)
    date = db.Column(db.DateTime, nullable=False, default=datetime.now())

# FAQ
class FAQ(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    questions = db.Column(db.Text, nullable=True)
    answers = db.Column(db.Text, nullable=True)
    date = db.Column(db.DateTime, nullable=False, default=datetime.now())

# Page
class ContactForm(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    form_type = db.Column(db.String(100), nullable=True)
    form_name = db.Column(db.Text, nullable=True)
    form_content = db.Column(db.Text, nullable=True)
    date = db.Column(db.DateTime, nullable=False, default=datetime.now())


''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

# ChangeLog *sequence-based* #major.minor[.build[.revision]] :> versioning
class Version(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    major = db.Column(db.Integer, nullable=True)
    minor = db.Column(db.Integer, nullable=True)
    build = db.Column(db.Integer, nullable=True)
    revision = db.Column(db.Integer, nullable=False)
    identifiers = db.Column(db.String(50), nullable=True)  # version
    name = db.Column(db.String(50), nullable=False)
    description = db.Column(db.Text, nullable=False)
    date = db.Column(db.DateTime, nullable=False, default=datetime.now())


''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

# create the database and the db table
# app.app_context().push()
db.create_all()

# commit the changes
db.session.commit()

# # admin |||||||||||||||||*************************** delete after deploy ***************************|||||||||||||||||
# user = User(username='admin', password=generate_password_hash('admin'), role=1, credit=0, ldap=datetime.now())
# db.session.add(user)
# db.session.commit()
# # admin |||||||||||||||||*************************** delete after deploy ***************************|||||||||||||||||
