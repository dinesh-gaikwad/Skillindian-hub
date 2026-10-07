export const V6_NOTES = {
  "Python Basics": {
    definition:"Python is a high-level, interpreted, general-purpose programming language.",
    why:"Python is widely used in backend development, automation, data science and AI.",
    how:"Python code is written in .py files and executed by the Python interpreter.",
    syntax:"variable = value",
    examples:[
      "name = 'Alex'\nprint(name)",
      "age = 20\nprint(age)",
      "x = 10\ny = 20\nprint(x + y)"
    ],
    dryRun:[
      "x = 10 → x stores 10",
      "y = 20 → y stores 20",
      "x + y → 30",
      "print() → displays 30"
    ],
    mistakes:[
      "Using a variable before assigning it",
      "Incorrect indentation",
      "Confusing = with ==",
      "Using incompatible data types"
    ],
    practical:"Create a program that accepts name, age and city and prints a formatted profile.",
    homework:"Create five small Python programs using variables and operators.",
    interview:[
      "What is Python?",
      "Why is Python interpreted?",
      "What are Python's major advantages?",
      "What is dynamic typing?"
    ],
    cheat:"Variables → Data Types → Operators → Input → Output → Conditions"
  },

  "Functions": {
    definition:"A function is a reusable block of code designed to perform a particular task.",
    why:"Functions reduce duplication and make programs modular and maintainable.",
    how:"Define a function with def, pass parameters when required and use return for a result.",
    syntax:"def function_name(parameters):\n    # code\n    return value",
    examples:[
      "def add(a,b):\n    return a+b\n\nprint(add(10,20))",
      "def greet(name):\n    return 'Hello ' + name\n\nprint(greet('Alex'))"
    ],
    dryRun:[
      "add(10,20) is called",
      "a = 10 and b = 20",
      "a+b = 30",
      "return sends 30 to the caller"
    ],
    mistakes:[
      "Forgetting to return a required value",
      "Wrong number of arguments",
      "Incorrect indentation",
      "Using local variables outside their scope"
    ],
    practical:"Build calculator functions for addition, subtraction, multiplication and division.",
    homework:"Create 10 reusable functions.",
    interview:[
      "What is a function?",
      "Parameter vs argument?",
      "return vs print?",
      "What is recursion?"
    ],
    cheat:"def → parameters → arguments → body → return → call"
  },

  "OOP": {
    definition:"Object-oriented programming organizes software around objects containing data and behavior.",
    why:"OOP improves reuse, organization, maintainability and scalability.",
    how:"Create classes, instantiate objects and use encapsulation, inheritance, polymorphism and abstraction.",
    syntax:"class ClassName:\n    def __init__(self):\n        pass",
    examples:[
      "class Student:\n    def __init__(self,name):\n        self.name=name\n\ns=Student('Alex')\nprint(s.name)"
    ],
    dryRun:[
      "Student class is created",
      "Student('Alex') creates an object",
      "self.name receives Alex",
      "s.name returns Alex"
    ],
    mistakes:[
      "Forgetting self",
      "Incorrect constructor",
      "Confusing class and object",
      "Overusing inheritance"
    ],
    practical:"Create Student, Course and Enrollment classes.",
    homework:"Implement all four major OOP principles with examples.",
    interview:[
      "What is a class?",
      "What is an object?",
      "Explain encapsulation",
      "Explain inheritance",
      "Explain polymorphism",
      "Explain abstraction"
    ],
    cheat:"Class → Object → Constructor → Encapsulation → Inheritance → Polymorphism → Abstraction"
  },

  "SQL Fundamentals": {
    definition:"SQL is a language used to manage and query relational databases.",
    why:"SQL is essential for backend development, analytics and database engineering.",
    how:"Use SQL statements to create, read, update and delete relational data.",
    syntax:"SELECT column FROM table WHERE condition;",
    examples:[
      "SELECT * FROM employees;",
      "SELECT name,salary FROM employees WHERE salary > 50000;",
      "SELECT department,COUNT(*) FROM employees GROUP BY department;"
    ],
    dryRun:[
      "FROM identifies the table",
      "WHERE filters rows",
      "SELECT chooses columns",
      "GROUP BY creates groups",
      "COUNT calculates group totals"
    ],
    mistakes:[
      "Missing WHERE in UPDATE or DELETE",
      "Incorrect JOIN condition",
      "Using WHERE instead of HAVING",
      "Ignoring indexes on large tables"
    ],
    practical:"Create an employee database and write 20 SQL queries.",
    homework:"Practice SELECT, JOIN, GROUP BY, subquery and aggregate problems.",
    interview:[
      "What is SQL?",
      "WHERE vs HAVING?",
      "INNER JOIN vs LEFT JOIN?",
      "Primary key vs foreign key?",
      "What is normalization?"
    ],
    cheat:"SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY"
  },

  "React Fundamentals": {
    definition:"React is a JavaScript library for building component-based user interfaces.",
    why:"React enables reusable components and efficient UI development.",
    how:"Build components using JSX, props, state and event handlers.",
    syntax:"function App(){ return <h1>Hello</h1>; }",
    examples:[
      "function Welcome({name}){\n  return <h1>Hello {name}</h1>;\n}"
    ],
    dryRun:[
      "App renders Welcome",
      "name prop is passed",
      "JSX generates UI",
      "React updates the browser UI"
    ],
    mistakes:[
      "Mutating state directly",
      "Missing key in list rendering",
      "Incorrect useEffect dependencies",
      "Making components unnecessarily large"
    ],
    practical:"Build reusable Header, Sidebar, Card and Dashboard components.",
    homework:"Create a small React course dashboard.",
    interview:[
      "What is React?",
      "What is JSX?",
      "Props vs state?",
      "What is a component?",
      "Why are keys required in lists?"
    ],
    cheat:"Component → JSX → Props → State → Events → Hooks"
  },

  "REST API Design": {
    definition:"A REST API exposes application resources through HTTP endpoints.",
    why:"REST allows frontend and backend applications to communicate using standardized HTTP operations.",
    how:"Define resources, endpoints, methods, validation, authentication and structured responses.",
    syntax:"GET /api/courses\nPOST /api/courses\nGET /api/courses/1",
    examples:[
      "GET /api/users",
      "POST /api/users",
      "PATCH /api/users/1",
      "DELETE /api/users/1"
    ],
    dryRun:[
      "Client sends HTTP request",
      "Server authenticates request",
      "Backend processes resource",
      "Database operation executes",
      "JSON response returns to client"
    ],
    mistakes:[
      "Using wrong HTTP methods",
      "Returning inconsistent response formats",
      "Missing authentication",
      "Poor error handling"
    ],
    practical:"Design CRUD APIs for courses and enrollments.",
    homework:"Document 15 REST endpoints.",
    interview:[
      "What is REST?",
      "GET vs POST?",
      "PUT vs PATCH?",
      "What is HTTP status 401?",
      "What is HTTP status 403?"
    ],
    cheat:"Resource → Endpoint → HTTP Method → Auth → Validation → JSON → Status Code"
  },

  "AI Fundamentals": {
    definition:"Artificial intelligence is the field of building systems capable of performing tasks requiring intelligent behavior.",
    why:"AI is used for prediction, recommendation, automation, generation and decision support.",
    how:"Data or instructions are processed by models that produce predictions or generated outputs.",
    syntax:"Input → Model → Output → Evaluation",
    examples:[
      "User data → Recommendation model → Recommended course",
      "Question → LLM → Generated answer"
    ],
    dryRun:[
      "Input is provided",
      "Model processes the input",
      "Prediction or generation occurs",
      "Output is evaluated"
    ],
    mistakes:[
      "Assuming every AI output is correct",
      "Ignoring evaluation",
      "Poor prompts",
      "Using sensitive data without proper controls"
    ],
    practical:"Design an AI course recommendation feature.",
    homework:"Compare AI, ML, deep learning and generative AI.",
    interview:[
      "AI vs ML?",
      "What is machine learning?",
      "What is generative AI?",
      "What is an LLM?",
      "Why is evaluation important?"
    ],
    cheat:"AI → ML → Deep Learning → Generative AI → LLM → Agents"
  },

  "Docker": {
    definition:"Docker packages applications and dependencies into portable containers.",
    why:"Containers provide consistent environments across development, testing and deployment.",
    how:"Create a Dockerfile, build an image and run a container.",
    syntax:"docker build -t app .\ndocker run -p 8000:8000 app",
    examples:[
      "FROM python:3.12",
      "COPY . /app",
      "RUN pip install -r requirements.txt",
      "CMD ['python','manage.py','runserver','0.0.0.0:8000']"
    ],
    dryRun:[
      "Dockerfile defines environment",
      "docker build creates image",
      "docker run creates container",
      "Port maps container to host"
    ],
    mistakes:[
      "Huge Docker images",
      "Hardcoding secrets",
      "Incorrect ports",
      "Not using .dockerignore"
    ],
    practical:"Containerize a Django + PostgreSQL application.",
    homework:"Create a Dockerfile and Docker Compose setup.",
    interview:[
      "Image vs container?",
      "Dockerfile purpose?",
      "Container vs virtual machine?",
      "What is Docker Compose?"
    ],
    cheat:"Dockerfile → Image → Container → Registry → Deployment"
  },

  "Big O": {
    definition:"Big O notation describes how algorithm resource usage grows as input size increases.",
    why:"It helps evaluate algorithm efficiency and is essential for coding interviews.",
    how:"Analyze loops, nested operations, recursion and data structures.",
    syntax:"Single loop → O(n)\nNested loops → O(n²)",
    examples:[
      "print(arr[0]) → O(1)",
      "for x in arr: print(x) → O(n)",
      "for x in arr:\n  for y in arr: print(x,y) → O(n²)"
    ],
    dryRun:[
      "One operation independent of n → O(1)",
      "One loop over n elements → O(n)",
      "Two nested loops over n → O(n²)"
    ],
    mistakes:[
      "Ignoring dominant terms",
      "Confusing time and space complexity",
      "Counting constants unnecessarily"
    ],
    practical:"Analyze the complexity of 10 Python programs.",
    homework:"Solve 20 complexity-analysis questions.",
    interview:[
      "What is Big O?",
      "O(1) vs O(n)?",
      "What is O(log n)?",
      "Why does complexity matter?"
    ],
    cheat:"O(1) < O(log n) < O(n) < O(n log n) < O(n²)"
  }
};
