import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
from flask_cors import CORS

api = Blueprint('api', __name__)

CORS(api)

@api.route("/register", methods=["POST"])
def register():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    
    # Check if email or password is missing
    if not email or not password:
        return jsonify({"msg": "Email and password are required"}), 400

    # Check if the email is already registered
    if User.query.filter_by(email=email).first():
        return jsonify({"msg": "Email already registered"}), 400

    # Create a new user
    user = User(email=email, password=password)
    db.session.add(user)
    db.session.commit()

    # Create an access token for the new user
    access_token = create_access_token(identity=email)

    return jsonify({"access_token": access_token}), 201

@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    
    # Check if email or password is missing
    if not email or not password:
        return jsonify({"msg": "Email and password are required"}), 400

    # Authenticate user
    user = User.query.filter_by(email=email).first()
    if not user or not user.check_password(password):
        return jsonify({"msg": "Invalid email or password"}), 401

    # Create access token
    access_token = create_access_token(identity=email)
    return jsonify({"access_token": access_token}), 200
