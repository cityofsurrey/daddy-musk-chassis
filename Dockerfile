FROM cityofsurrey/node

COPY package.json yarn.lock /tmp/

# Install packages
RUN cd /tmp && yarn

# Install app
RUN mkdir -p /app
COPY . /app/

WORKDIR /app
RUN ln -s /tmp/node_modules
RUN npm run build
CMD npm start

EXPOSE 8090

HEALTHCHECK CMD curl --fail http://localhost:8090/ || exit 1
