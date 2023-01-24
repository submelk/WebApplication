from .packages import *

@application.errorhandler(404)
def page_not_found(error):
    return render_template('page/error_handler.html'), 404

@application.errorhandler(403)
def page_not_found(error):
    return render_template('page/error_handler.html'), 403

@application.errorhandler(500)
def page_not_found(error):
    return render_template('page/error_handler.html'), 500
