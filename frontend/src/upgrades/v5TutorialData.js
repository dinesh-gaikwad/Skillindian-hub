export const V5_MODULES = [
  {
    id:"foundation",
    title:"Computer & Programming Foundation",
    icon:"💻",
    level:"Beginner",
    lessons:[
      ["Computer Fundamentals","Computer basics, hardware, software, OS and files."],
      ["Programming Fundamentals","Variables, logic, algorithms and problem solving."],
      ["VS Code Mastery","Editor, terminal, extensions and project workflow."],
      ["Git Fundamentals","Repository, commit, branch, merge and push."],
      ["English for IT","Technical vocabulary and interview communication."]
    ]
  },
  {
    id:"python",
    title:"Python & OOP",
    icon:"🐍",
    level:"Beginner → Advanced",
    lessons:[
      ["Python Basics","Syntax, variables, input, output and operators."],
      ["Data Types","String, list, tuple, set, dictionary and conversion."],
      ["Control Flow","if, elif, else, for, while, break and continue."],
      ["Functions","Parameters, arguments, return, scope and recursion."],
      ["Modules & Packages","Import, modules, packages and environments."],
      ["Exception Handling","try, except, else, finally and custom exceptions."],
      ["File Handling","Read, write, append, CSV and JSON basics."],
      ["OOP","Class, object, constructor, inheritance, polymorphism and encapsulation."],
      ["Advanced Python","Decorators, generators, iterators and comprehensions."],
      ["Python Lab","Build practical Python applications."]
    ]
  },
  {
    id:"web",
    title:"HTML CSS JavaScript React",
    icon:"🌐",
    level:"Beginner → Advanced",
    lessons:[
      ["HTML5","Semantic HTML, forms, tables, media and accessibility."],
      ["CSS3","Selectors, box model, flexbox, grid and responsive design."],
      ["Bootstrap","Responsive components and layouts."],
      ["JavaScript Basics","Variables, functions, arrays, objects and DOM."],
      ["JavaScript Advanced","Promises, async/await, modules and APIs."],
      ["React Fundamentals","Components, JSX, props and state."],
      ["React Hooks","useState, useEffect and custom hooks."],
      ["React Routing","Pages, routes, navigation and protected routes."],
      ["Frontend API Integration","Connect React with REST APIs."],
      ["Frontend Project","Build a production-style interface."]
    ]
  },
  {
    id:"backend",
    title:"Django & REST API",
    icon:"🚀",
    level:"Intermediate → Advanced",
    lessons:[
      ["Django Fundamentals","Project, app, settings, URLs and views."],
      ["Models","Models, fields and relationships."],
      ["Django ORM","Queries, filters, joins and optimization."],
      ["Authentication","Register, login, logout and user sessions."],
      ["Django REST Framework","Serializers, views, routers and APIs."],
      ["REST API Design","Resources, HTTP methods, status codes and JSON."],
      ["JWT Authentication","Access tokens, refresh tokens and protected APIs."],
      ["RBAC","Role-based access control and permissions."],
      ["API Testing","Postman, validation and error handling."],
      ["Backend Architecture","Production Django architecture."]
    ]
  },
  {
    id:"data",
    title:"SQL MySQL DBMS",
    icon:"🗄️",
    level:"Beginner → Advanced",
    lessons:[
      ["SQL Fundamentals","SELECT, INSERT, UPDATE and DELETE."],
      ["Filtering & Sorting","WHERE, ORDER BY, LIMIT and operators."],
      ["Joins","INNER, LEFT, RIGHT and multi-table joins."],
      ["Aggregation","GROUP BY, HAVING and aggregate functions."],
      ["Subqueries","Nested queries and correlated queries."],
      ["DBMS Fundamentals","Keys, normalization, constraints and indexes."],
      ["Transactions","ACID, COMMIT, ROLLBACK and isolation."],
      ["MySQL Optimization","Indexes, EXPLAIN and query optimization."],
      ["Database Design","ER concepts and production schema design."],
      ["Data Lab","Build and query a complete database."]
    ]
  },
  {
    id:"ai",
    title:"AI ML Data Science",
    icon:"🤖",
    level:"Intermediate → Advanced",
    lessons:[
      ["AI Fundamentals","AI, ML, deep learning and generative AI."],
      ["Python for AI","NumPy, Pandas and data preparation."],
      ["Machine Learning","Features, labels, training and prediction."],
      ["Model Evaluation","Accuracy, precision, recall and F1."],
      ["Prompt Engineering","Reliable prompts and structured outputs."],
      ["Embeddings","Represent text as vectors."],
      ["RAG","Retrieval augmented generation architecture."],
      ["Vector Search","Similarity search and semantic retrieval."],
      ["AI Agents","Tools, planning and multi-step workflows."],
      ["AI Project","Build an AI-powered application."]
    ]
  },
  {
    id:"project",
    title:"EntreSkill Hub Project",
    icon:"🏗️",
    level:"Project Mastery",
    lessons:[
      ["Project Overview","Problem, users, features and business purpose."],
      ["System Architecture","Frontend, backend, database and API flow."],
      ["Authentication","JWT, OAuth concepts and secure login."],
      ["Courses","Course creation, listing and learning flow."],
      ["Enrollment","User enrollment and course access."],
      ["Progress Tracking","Lesson completion and progress calculation."],
      ["Interview Portal","Questions, attempts and scoring."],
      ["Certificates","Completion and certificate workflow."],
      ["Mentorship","Mentor sessions and scheduling concepts."],
      ["AI Recommendations","AI-powered career and business recommendations."]
    ]
  },
  {
    id:"devops",
    title:"Git Docker Cloud DevOps",
    icon:"☁️",
    level:"Intermediate → Advanced",
    lessons:[
      ["Git","Working tree, staging, commits and branches."],
      ["GitHub","Repositories, pull requests and collaboration."],
      ["Docker","Images, containers and Dockerfiles."],
      ["Docker Compose","Multi-service local environments."],
      ["CI/CD","Automated build, test and deployment."],
      ["GitHub Actions","Workflow automation."],
      ["Azure","Cloud services and deployment concepts."],
      ["AWS","Core cloud architecture concepts."],
      ["Kubernetes","Pods, deployments and services."],
      ["Production Deployment","Environment variables, database and monitoring."]
    ]
  },
  {
    id:"dsa",
    title:"DSA & Coding Interview",
    icon:"🧠",
    level:"Beginner → Expert",
    lessons:[
      ["Complexity","Big O time and space complexity."],
      ["Arrays","Traversal, searching and manipulation."],
      ["Strings","Frequency, patterns and two pointers."],
      ["Hashing","Hash maps, sets and frequency problems."],
      ["Linked Lists","Nodes, traversal and pointer techniques."],
      ["Stack & Queue","LIFO, FIFO and common problems."],
      ["Trees","Binary trees, BST and traversals."],
      ["Graphs","BFS, DFS and graph representation."],
      ["Dynamic Programming","State, recurrence and memoization."],
      ["Coding Interview Lab","Timed interview problem solving."]
    ]
  },
  {
    id:"interview",
    title:"10 LPA Interview Arena",
    icon:"🎯",
    level:"Job Ready",
    lessons:[
      ["Self Introduction","Professional 60-second introduction."],
      ["Python Interview","Core Python and coding questions."],
      ["Django Interview","Django, ORM and API questions."],
      ["React Interview","React, hooks and frontend questions."],
      ["SQL Interview","SQL and database interview questions."],
      ["System Design","Architecture and scalability questions."],
      ["Project Cross Questions","Deep questions about EntreSkill Hub."],
      ["Coding Round","DSA coding interview practice."],
      ["HR Round","Behavioral and career questions."],
      ["Final Mock Interview","Complete 10 LPA simulation."]
    ]
  }
];

export const V5_LESSON_CONTENT = {
  "Python Basics": {
    theory:"Python is a high-level programming language known for readable syntax and rapid development.",
    example:"name = 'Dinesh'\\nprint(name)",
    output:"Dinesh",
    practical:"Create a program that accepts your name and prints a professional introduction.",
    interview:"Why is Python popular for backend development and AI?",
    revision:"Variables → data types → operators → input → output → conditions."
  },
  "Functions": {
    theory:"A function is a reusable block of code designed to perform a specific task.",
    example:"def add(a, b):\\n    return a + b\\n\\nprint(add(10, 20))",
    output:"30",
    practical:"Create functions for addition, subtraction, multiplication and division.",
    interview:"What is the difference between return and print?",
    revision:"def → parameters → arguments → return → scope."
  },
  "OOP": {
    theory:"Object-oriented programming organizes software around classes and objects.",
    example:"class Student:\\n    def __init__(self, name):\\n        self.name = name\\n\\ns = Student('Alex')\\nprint(s.name)",
    output:"Alex",
    practical:"Create Student and Course classes and connect them.",
    interview:"Explain encapsulation, inheritance, polymorphism and abstraction.",
    revision:"Class → Object → Constructor → Encapsulation → Inheritance → Polymorphism."
  },
  "SQL Fundamentals": {
    theory:"SQL is used to store, retrieve, modify and analyze relational database data.",
    example:"SELECT name, salary\\nFROM employees\\nWHERE salary > 50000;",
    output:"Employees with salary above 50000",
    practical:"Create an employees table and write five SELECT queries.",
    interview:"What is the difference between WHERE and HAVING?",
    revision:"SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY."
  },
  "React Fundamentals": {
    theory:"React is a component-based JavaScript library for building user interfaces.",
    example:"function App(){\\n  return <h1>Hello React</h1>;\\n}",
    output:"Hello React",
    practical:"Create reusable Header, Card and Footer components.",
    interview:"What is the difference between props and state?",
    revision:"Component → JSX → Props → State → Events."
  },
  "REST API Design": {
    theory:"REST APIs expose resources through HTTP methods and structured responses.",
    example:"GET /api/courses\\nPOST /api/courses\\nGET /api/courses/1",
    output:"JSON resource responses",
    practical:"Design CRUD endpoints for a Course resource.",
    interview:"Explain GET, POST, PUT, PATCH and DELETE.",
    revision:"Resource → Endpoint → HTTP Method → Status Code → JSON."
  },
  "AI Fundamentals": {
    theory:"Artificial intelligence enables systems to perform tasks that normally require human intelligence.",
    example:"Input → Model → Prediction → Evaluation",
    output:"AI system prediction",
    practical:"Build a simple classification workflow.",
    interview:"Difference between AI, ML and Deep Learning?",
    revision:"AI → ML → Deep Learning → Generative AI."
  },
  "Docker": {
    theory:"Docker packages applications and dependencies into portable containers.",
    example:"docker build -t app .\\ndocker run -p 8000:8000 app",
    output:"Running application container",
    practical:"Containerize a Django application.",
    interview:"Image vs container?",
    revision:"Dockerfile → Image → Container → Registry → Deployment."
  },
  "Big O": {
    theory:"Big O describes how algorithm resource usage grows with input size.",
    example:"for i in range(n):\\n    print(i)",
    output:"O(n)",
    practical:"Compare O(1), O(n), O(log n) and O(n²) examples.",
    interview:"Why is complexity important in interviews?",
    revision:"O(1) → O(log n) → O(n) → O(n log n) → O(n²)."
  }
};
