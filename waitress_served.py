from waitress import serve
from router import router1  # Your Flask app


if __name__ == "__main__":
    serve(router1,host="127.0.0.1",port=8000)

