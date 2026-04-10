# Start with a tiny, lightweight Linux box that already has Node.js installed
FROM node:18-alpine

# Create a working directory inside the box
WORKDIR /app

# Copy our app.js from your Arch Linux machine into the box
COPY app.js .

# Tell the box to open port 8080
EXPOSE 8080

# The command to run when the box starts
CMD ["node", "app.js"]
