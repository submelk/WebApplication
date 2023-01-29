from .packages import *
from .auth import *

################################################################################################################################################################
""" Renders the profile. """
################################################################################################################################################################

@application.route("/profile", methods=('GET', 'POST'))
@login_required
def profile_index():
    error1 = None

    # userinfo = UserInformation.query.filter(
    #     UserInformation.user_id == session["user_id"]).first()

    # if userinfo != None:
    #     error1 = "مشخصات شما تکمیل شده"
    #     flash(error1)
    #     return redirect(url_for('member/profile_information'))

    return render_template('member/profile_index.html',userinfo=session["user_username"])

@application.route("/profile/information", methods=('GET', 'POST'))
@login_required
def profile_information():
  
    # file = request.files['uimage_file']
    # filename = os.path.join(application.config['UPLOAD_FOLDER'], file.filename)
    # file.save(filename)


    # phrase_entry = UserInformation(uname = request.form["uname"],ufamily = request.form["ufamily"],uiid = request.form["uiid"],ubirthday = request.form["ubirthday"],uemail = request.form["uemail"],uaddress = request.form["uaddress"], file_address=file.filename)
    # db.session.add(phrase_entry)
    # db.session.commit()
    
    # error1 = "فایل با موفقیت بارگذاری شد"
    # flash(error1)

    return render_template('member/profile_information.html')

