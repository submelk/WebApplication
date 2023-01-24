from .packages import *


@application.before_request
def load_user(): 
    user_id = session.get("user_id")
    g.user = User.query.get(user_id) if user_id is not None else None
    
def login_required(func): 
    @wraps(func)
    def decorated_function(*args, **kwargs):
        if g.user is None: 
            return redirect(url_for("login", next = request.url))
        return func(*args, **kwargs)
    return decorated_function

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

@application.route('/login', methods=('GET', 'POST'))
def login():
    if request.method == "POST": 

        username = request.form["username"]
        password = request.form["password"]

        error1 = None 
        error2 = None

        if username == "" or password == "" :
        
            error2 = 'لطفا ایمیل و پسورد خود را وارد کنید'
            flash(error2)
            
        user = User.query.filter_by(username=username).first()
        
        if error2 is None:

            if user is None: 
                error1 = "نام کاربری اشتباه است"
            elif not user.check_password(password): 
                error1 = "کلمه عبور اشتباه است"
        
            if error1 is None:
                session.clear()
                session["user_id"] = user.id
                session["user_role"] = user.role
                session["user_username"] = user.username 
                session["user_phone"] = user.phone
                session["user_credit"] = user.credit                                                                   
                session["user_ldap"] = user.ldap 
                session["LastLoginTime"] = datetime.now()  #LastLoginTime

                if session["user_role"] == 0: # 1:= profile
                    return redirect(url_for("profile_index"))
                elif session["user_role"] == 1: # 1:= admin
                    return redirect(url_for("admin_dashboard"))
                    #return redirect(url_for("admin_categories"))
        
            flash(error1)
             
    return render_template("auth/login.html", title='ورود',
        year=datetime.now().year)

@application.route("/signup", methods=('GET', 'POST'))
def register(): 
    if request.method == "POST": 

        username = request.form["username"]
        password = request.form["password"]
        retypeـpassword = request.form["retypeـpassword"]
        terms = False
        if request.form.get("terms"):
            terms = True

        error1 = None 
        error2 = None
        error3 = None
        error4 = None
        error5 = "مشکلی پیش آمده و مجددا تلاش کنید"

        if terms == True :
            if username == "" or password == "" :
                error2 = 'لطفا ایمیل و پسورد خود را وارد کنید'
            else :
                if password==retypeـpassword :
                    users = User.query.all()
                    for singleUser in users: 
                        if singleUser.username == username:
                            error4 = 'این کاربر قبلا جود دارد از ایمیل متفاوتی استفاده کنید'
                else :
                    error3 = "رمز و تکرار رمز یکسان نیست"
        else :
            error1 = "پذیرفتن شرایط و مقررات برای ثبت نام الزامی است"

        if error1 is None and error2 is None and error3 is None and error4 is None: 
            user = User(username = username, password = generate_password_hash(password), role = 0, credit = 0,ldap = datetime.now())
            db.session.add(user)
            db.session.commit() 
            flash("ثبت نام شده اید")           
            return redirect(url_for("login"))
        elif error1!= None :
            flash(error1)
        elif error2!= None :
            flash(error2)            
        elif error3!= None :
            flash(error3)
        elif error4!= None :
            flash(error4)
        else :
            flash(error5)    

    return render_template("auth/signup.html", title='ثبت نام',
        year=datetime.now().year)

@application.route("/logout")
def logout(): 
    session.clear()
    return redirect(url_for("login"))