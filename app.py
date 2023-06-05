from flask import Flask, send_from_directory

app = Flask(__name__)


@app.route('/')
def index():
    return send_from_directory('', 'index.html')


@app.route('/get_text')
def get_text():
    # 读取 txt 文件内容
    with open('all_info.txt', 'r') as file:
        content = file.read()

    return content


if __name__ == '__main__':
    app.run()
