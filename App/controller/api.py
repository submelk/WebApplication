from .packages import *


@application.route('/test_api')
def index():
  flash('API TEST')
  return render_template('test_api.html')

@application.route('/api/data')
def get_data():
  return render_template('data.json')

@application.route('/v1/api/test')
def api_test():
    """api test"""
    statment = "GET"
    logdate = datetime.now()

    res = {
          'msg_id' : 'message_id',
          'type' : statment,
          'Token' : 'key',
          'message' : 'message',
          'state' : 'state',
          'logdate' : logdate
      }

    result = orjson.dumps(res)

    return result
