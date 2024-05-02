FROM python
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY requirements.txt /usr/src/app
RUN pip3 install -r requirements.txt

# Bundle app source
COPY . /usr/src/app

EXPOSE 5000


