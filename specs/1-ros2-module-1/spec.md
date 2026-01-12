# Module 1: The Robotic Nervous System (ROS 2)

## Target Audience

This module is designed for AI and robotics students who possess a foundational understanding of Python programming.

## Chapters

### 1. ROS 2 Core Concepts

This chapter introduces the fundamental building blocks of ROS 2, essential for developing robust robotic applications.

#### 1.1 Nodes

Nodes are executable processes that perform computation. They are the basic units of communication in ROS 2. This section will cover:

-   What is a node and its purpose in a ROS 2 system.
-   How to create a simple ROS 2 node in Python.
-   The lifecycle of a node.

```python
# Minimal runnable example: a simple ROS 2 node
import rclpy
from rclpy.node import Node

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.i = 0

def main(args=None):
    rclpy.init(args=args)
    minimal_publisher = MinimalPublisher()
    rclpy.spin(minimal_publisher)
    minimal_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

#### 1.2 Topics

Topics are a communication mechanism where nodes can publish messages and subscribe to messages. This section will detail:

-   The publish/subscribe model.
-   Defining custom message types.
-   Publishing data to a topic.
-   Subscribing to data from a topic.

```python
# Minimal runnable example: publishing to a topic
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'topic', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.i = 0

    def timer_callback(self):
        msg = String()
        msg.data = 'Hello World: %d' % self.i
        self.publisher_.publish(msg)
        self.get_logger().info('Publishing: "%s"' % msg.data)
        self.i += 1

def main(args=None):
    rclpy.init(args=args)
    minimal_publisher = MinimalPublisher()
    rclpy.spin(minimal_publisher)
    minimal_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

```python
# Minimal runnable example: subscribing to a topic
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MinimalSubscriber(Node):

    def __init__(self__(self):
        super().__init__('minimal_subscriber')
        self.subscription = self.create_subscription(
            String,
            'topic',
            self.listener_callback,
            10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info('I heard: "%s"' % msg.data)

def main(args=None):
    rclpy.init(args=args)
    minimal_subscriber = MinimalSubscriber()
    rclpy.spin(minimal_subscriber)
    minimal_subscriber.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

#### 1.3 Services

Services provide a request/response communication model, ideal for functionality that requires an immediate, single-shot result. Topics covered include:

-   The client/server paradigm in ROS 2 services.
-   Defining service interfaces.
-   Implementing a service server.
-   Calling a service client.

### 2. Python Agents to ROS Controllers (rclpy)

This chapter focuses on integrating Python-based AI agents with ROS 2, enabling them to control robotic hardware or simulations through ROS 2 interfaces using `rclpy`, the Python client library for ROS 2.

-   Overview of `rclpy` and its role in Python-ROS 2 interaction.
-   Creating Python classes that act as ROS 2 clients or servers.
-   Translating AI agent decisions into ROS 2 commands.
-   Receiving sensor data from ROS 2 and processing it within Python agents.

### 3. Humanoid Modeling with URDF

This chapter introduces the Unified Robot Description Format (URDF) for modeling the kinematic and dynamic properties of humanoid robots within the ROS 2 ecosystem.

-   Introduction to URDF: its structure and purpose.
-   Defining robot links and joints.
-   Representing sensory and actuator components in URDF.
-   Visualizing URDF models in ROS 2.
