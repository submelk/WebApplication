import requests
import orjson

api_url='http://#:#/v1/api/test'
api_data=requests.get(api_url)
api_content = api_data.content.decode('utf-8').split(';')
print(orjson.loads(orjson.dumps(api_content)))
#.................