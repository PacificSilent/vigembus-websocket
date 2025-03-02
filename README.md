# WebSocket Joystick Server

This project sets up a WebSocket server that enables remote joystick connections using the ViGEmBus protocol. The server processes joystick data received from clients and formats it for use with the ViGEmBus virtual controller interface.

## Overview

- **Remote Joystick Support:** Clients send joystick data over WebSocket connections.
- **Data Processing:** The server interprets the joystick state (axes and buttons) and forwards this information to virtual controllers via the ViGEmBus protocol.
- **Virtual Controller Management:** Supports creating and disconnecting virtual controllers as needed.

## Requirements

- **Node.js:** Install Node.js via [nodejs.org](https://nodejs.org/)
- **Python 3.11:** This project requires Python 3.11 for certain dependencies. Make sure it is installed and accessible on your system.
- **ViGEmBus Driver:** Ensure the ViGEmBus driver is installed on your Windows machine.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/my-websocket-server.git
   ```

2. **Navigate to the project directory:**

   ```bash
      cd my-websocket-server
   ```

3. **Install the Node.js dependencies:**
   ```bash
      npm install
   ```

## Usage

To start the WebSocket server, run the following command:

```bash
   node src/server.js
```

or

```bash
   npm start
```

The server will listen for incoming WebSocket connections. When a connection is established, it will process joystick data sent by clients.

## Joystick Data Format

Clients should send joystick data in JSON format as shown below:

```bash
   {
      "type": "joystick",
      "index": 0,
      "axes": [0.9837390184402466, -0.16395652294158936, 0, 0],
      "buttons": [1, 0, 1, 1, 1, 1, 0.9970674514770508, 0.9970674514770508, 0, 0, 0, 0, 0, 0, 0, 0, 0]
   }
```

The server will interpret this data and forward it to the ViGEmBus interface to update the state of the corresponding virtual controller.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Made by **[Jona](https://github.com/PacificSilent)** 😊

---
