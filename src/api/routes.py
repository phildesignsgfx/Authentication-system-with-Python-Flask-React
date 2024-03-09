import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
from flask_cors import CORS  # Import CORS

# Create Flask APP
api = Blueprint('api', __name__)

# Initialize CORS for the blueprint
CORS(api)

@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "test" or password != "test":
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=email)
<<<<<<< HEAD
    return jsonify(access_token=access_token)


=======
    return jsonify(access_token=access_token)
>>>>>>> 78fa0fb (thisisit)
