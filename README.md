# 📚 Know-as-a-Service (KaaS)

Ever needed a quick fact about Gaurav Kabra?  
This tiny API returns random, interesting facts about Gaurav Kabra — his education, work experience, skills, and achievements.

Built for showcasing Gaurav's professional profile in a programmatic way.

## 🚀 API Usage

**Base URL**
```
https://know-as-a-service.netlify.app/fact
```

**Method:** `GET`  
**Rate Limit:** `120 requests per minute per IP`

### 🔄 Example Request
```http
GET /fact
```

### ✅ Example Response
```json
{
  "fact": "Gaurav Kabra holds the position of Member of Technical Staff at Salesforce."
}
```

Use it to learn more about Gaurav Kabra's professional background, skills, and accomplishments.

---

## 🛠️ Self-Hosting

Want to run it yourself? It's lightweight and simple.

### 1. Clone this repository
```bash
git clone https://github.com/kabragaurav/know-as-a-service.git
cd know-as-a-service
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the server
```bash
npm start
```

The API will be live at:
```
http://localhost:3000/fact
```

You can also change the port using an environment variable:
```bash
PORT=5000 npm start
```

---

## 📁 Project Structure

```
know-as-a-service/
├── index.js            # Express API
├── facts.json          # Collection of facts about Gaurav Kabra
├── package.json
└── README.md
```

---

## 📦 package.json

For reference, here's the package config:

```json
{
  "name": "know-as-a-service",
  "version": "1.0.0",
  "description": "A lightweight API that returns random fact about Gaurav Kabra.",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "Gaurav Kabra",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2",
    "express-rate-limit": "^7.0.0"
  }
}
```

---

## 👤 Author

Created by [Gaurav Kabra](https://github.com/kabragaurav)

---

## 📄 License

MIT
