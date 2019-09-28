from flask import *
from bson.json_util import dumps
from db_management import *
from global_func import *
from datetime import datetime

BP = Blueprint('newsfeed', __name__)

@BP.route('/get_newsfeed/<int:type>/<string:tags>/<string:date>/<int:pagenation>/<int:page>')
def get_newsfeed(type=None, tags=None, date=None, pagenation=None, page=None):
	
	if tags is not None:
		tag_list = tags.split('_')
	else:
		tag_list = []

	if date is not None:
		date = datetime.strptime(date, '%Y-%m-%d')
	else:
		date = datetime.now()

	result = find_newsfeed(g.db, None, tag_list, date, pagenation, page)

	return jsonify(
		posts = dumps(result),
		result = "success")

@BP.route('/get_recommendation_newsfeed/<int:num>')
def get_recommendation_newsfeed(num=200):
	result = find_recommendation_newsfeed(g.db, num)

	return jsonify(
		posts = dumps(result),
		result = "success")


#############################################
#############################################
