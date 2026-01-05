FROM rossanorb/debian-node:18

WORKDIR /usr/src/app

# Copy application files
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 9000
EXPOSE 9229
CMD ["npm", "run", "debug"]
