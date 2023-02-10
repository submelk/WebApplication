from .packages import *
from .auth import *


@application.route("/admin/dashboard", methods=["GET", "POST"])
@login_required
def admin_dashboard():
    # """admin dashboard"""
    #  @login_required
    # if not session.get("logged_in"):
    #     abort(401)
    return render_template("admin/admin_dashboard.html", title='پیشخوان مدیر')

@application.route("/admin/contact", methods=["GET", "POST"])
@login_required
def admin_contact():

    contact_requests = ContactForm.query.order_by(ContactForm.date.desc()).all()

    return render_template("admin/admin_contact.html", contact_requests=contact_requests)

@application.route("/admin/consultation", methods=["GET", "POST"])
@login_required
def admin_consultation():

    consultation_requests = Consultation.query.order_by(
        Consultation.date.desc()).all()

    return render_template("admin/admin_consultation.html", consultation_requests=consultation_requests)

@application.route("/admin/member", methods=["GET", "POST"])
@login_required
def admin_member():
    """admin member"""

    member = User.query.order_by(User.id.desc()).all()

    return render_template('admin/admin_member.html', member=member)

@application.route('/delete/member/<int:member_id>')
@login_required
def delete_member(member_id):
    User.query.filter_by(id=member_id).delete()
    db.session.commit()
    return redirect(url_for('admin_member'))

@application.route("/admin/FAQ", methods=["GET", "POST"])
@login_required
def admin_faq():
    """admin FAQ"""

    FAQs = FAQ.query.order_by(FAQ.id.desc()).all()

    return render_template('admin/admin_FAQ.html', FAQs=FAQs)

@application.route('/add/FAQ', methods=['POST'])
@login_required
def add_FAQ():

    faq_entry = FAQ(questions=request.form['questions'], answers=request.form['answers'])
    db.session.add(faq_entry)
    db.session.commit()

    return redirect(url_for('admin_faq'))

@application.route('/delete/FAQ/<int:FAQ_id>')
@login_required
def delete_FAQ(FAQ_id):
    FAQ.query.filter_by(id=FAQ_id).delete()
    db.session.commit()
    return redirect(url_for('admin_faq'))

@application.route("/admin/about", methods=["GET", "POST"])
@login_required
def admin_about():
    """admin about"""

    about_page = Page.query.filter_by(page_type="about").first()
    db.session.commit()

    return render_template('admin/admin_about.html',
                           id=about_page.id,
                           title=about_page.page_name,
                           content=about_page.page_content
                           )

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

@application.route("/admin/page", methods=["GET", "POST"])
@login_required
def admin_page():
    """admin pages"""

    pages = Page.query.order_by(Page.date.desc()).all()

    return render_template('admin/admin_page.html', pages=pages)

@application.route('/add/page', methods=['POST'])
@login_required
def add_page():
    page_entry = Page(page_type=request.form['page_type'], page_name=request.form['title'],
                      page_content=request.form['content'])

    db.session.add(page_entry)
    db.session.commit()

    return redirect(url_for('admin_page'))

@application.route('/delete/page/<int:page_id>')
@login_required
def delete_page(page_id):
    Page.query.filter_by(id=page_id).delete()
    db.session.commit()
    return redirect(url_for('admin_page'))

@application.route('/edit/page/<int:page_id>')
@login_required
def edit_page(page_id):
    page = Page.query.filter(Page.id == page_id).first()
    return render_template('edit-page.html',
                           id=page.id,
                           title=page.title,
                           content=page.content
                           )

@application.route('/admin/page/<int:page_id>')
@login_required
def view_page(page_id):

    page = Page.query.filter_by(id=page_id).first()
    return render_template('admin/admin_page_edit.html',
                           id=page.id,
                           title=page.page_name,
                           content=page.page_content
                           )

@application.route('/admin/ChangeLog')
@login_required
def admin_version():
    version = Version.query.all()
    return render_template('admin/version.html', version=version)

@application.route('/admin/create/ChangeLog', methods=('GET', 'POST'))
@login_required
def create_version():
    if request.method == 'POST':

        major = request.form['major']
        minor = request.form['minor']
        build = request.form['build']
        name = request.form['name']
        description = request.form['description']

        error = None

        if not name:
            error = 'Name is required.'

        if not description:
            error = 'Description is required.'

        if error is None:

            revision = 0
            identifiers = str(major) + '.' + str(minor) + '.' + \
                str(build) + '.' + str(build) + '.' + str(revision)
            vd = datetime.now()

            version = Version(
                major=major,
                minor=minor,
                build=build,
                revision=revision,
                identifiers=identifiers,
                name=name,
                description=description,
                date=vd)

            db.session.add(version)
            db.session.commit()
            return redirect(url_for('admin_version'))

        flash(error)

    version = Version.query.all()
    return render_template('admin/version_form.html', version=version)

@application.route('/admin/delete/ChangeLog/<id>', methods=('GET', 'POST'))
@login_required
def delete_version(id):
    version = Version.query.get_or_404(id)
    if request.method == 'POST':
        error = None

        if error is None:
            Version.query.filter_by(id=id).delete()
            db.session.commit()
            return redirect(url_for('admin_version'))

        flash(error)

    return render_template('admin/version_delete.html', name=version.name)
