from .packages import *

@application.route('/')
def home():
    """Renders the home page."""
    
    return render_template(
        'page/index.html',
        title='صفحه اول')

@application.route('/contact')
def contact():
    """Renders the contact page."""

    return render_template(
        'page/contact.html'
    )

@application.route('/about')
def about():
    """Renders the about page."""

    return render_template(
        'page/about.html')

@application.route('/FAQ')
def FAQs():
    """Renders the FAQ page."""

    q_faq = FAQ.query.order_by(FAQ.id.asc()).all()
    
    return render_template(
        'page/FAQ.html',
        title='FAQ',
        q_faq=q_faq
    )

@application.route('/ChangeLog')
def ChangeLog():
    version = Version.query.order_by(Version.id.desc()).limit(10).all()
    return render_template('page/ChangeLog.html',
                           title='روند تغییرات',
                           version=version)

#consultation
@application.route("/add/consultation_request", methods=["POST"])
def consultation_request():
    """Adds new consultation request to the database."""

    con_req = Consultation(name=request.form["name"],telephone=request.form["phone"])
    db.session.add(con_req)
    db.session.commit()

    error = "درخواست ایجاد شد"
    flash(error)
    return redirect(url_for('home'))

#ContactForm
@application.route("/add/contact_request", methods=["POST"])
def contact_request():
    """Adds new contact request to the database."""
    
    fn = request.form["c_name"] + "" + request.form["c_family"] + " - " + request.form["c_email"] + " - " + request.form["c_tell"] + " - " + request.form["c_title"] 

    con_req = ContactForm(form_type=request.form["c_type"],form_name=fn,form_content=request.form["c_content"])
    db.session.add(con_req)
    db.session.commit()

    error = "درخواست ایجاد شد"
    flash(error)
    return redirect(url_for('contact'))