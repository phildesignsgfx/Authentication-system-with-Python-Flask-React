@api.route('/token', methods=['POST'])
def create_token():
    email = request.json.get("email")
    password = request.json.get("password")
    
    # You might want to perform actual authentication here, such as checking against a database
    if email != "test" or password != "test":
        return jsonify({"msg": "Bad email or password"}), 401

    # If authentication succeeds, generate an access token
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token), 200
