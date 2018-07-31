module.exports = {
  "type": "flow",
  "nodes": [
    {
      "id": "API",
      "title": "API",
      "ns": "superagent",
      "name": "api",
      "context": {
        "method": "GET"
      }
    },
    {
      "id": "End",
      "title": "End",
      "ns": "superagent",
      "name": "end"
    }
  ],
  "links": [
    {
      "source": {
        "id": "API",
        "port": "request"
      },
      "target": {
        "id": "End",
        "port": "request"
      },
      "metadata": {
        "title": "API request -> request End"
      }
    }
  ],
  "title": "Get Text Request",
  "description": "Retrieve text data from remote url",
  "ports": {
    "input": {
      "url": {
        "nodeId": "API",
        "title": "Url",
        "name": "url"
      }
    },
    "output": {
      "headers": {
        "nodeId": "End",
        "title": "Headers",
        "name": "headers"
      },
      "res": {
        "nodeId": "End",
        "title": "Res",
        "name": "res"
      },
      "out": {
        "nodeId": "End",
        "title": "Out",
        "name": "body"
      }
    }
  },
  "providers": {
    "@": {
      "url": "https://api.chix.io/v1/nodes/rhalff/{ns}/{name}"
    }
  },
  "ns": "superagent",
  "name": "getTextRequest"
}