			CI SETUP

A team of 6 person are creating a CI/CD environment and their source code is written in C#. 
CI requires a few steps that need to be executed when team members are merging development code to the main branch. One of the steps is linting. 
C# has various linting tools, etc. StyleCop, Sonar, Resharper, Roslyn and even visual studios own integrated linting. 
The team could go with StyleCop as the process of including it to an existing project is very straight forward, it simply requires installing a nuget package StyleCop.Analyzers. 
StyleCop could be paired with Sonar, which has a different role in linting C# code, as it does deeper analysis of the code, so together they would keep the code tidy and maintainable.

The next step to consider would be building. Depending on the machinery of the team, they would have several options on what kind of builder to use. 
The methods commonly used in C# are IDE, CMake, MSBuild command line and azure Pipelines. 
Azure pipelines would be the way to go as they would automate the build process as part of a CI/Cd pipeline, but as this team is building a very complex application, 
they are going to go for a self-hosted CI setup. The team is using Linux and windows machines, so they are going to opt using CMake tools to build the application, 
as they can use the same build across Linux and Windows Platforms.

There are many unit testing frameworks for C#, but as visual studio offers an integrated unit testing tool, called Live Unit Testing, 
which detects test affected by code changes and runs them in the background, it would be the most beneficial for the team 
as they try to maintain a CD and live testing would speed up the testing process a lot.

As mentioned before a good alternative for a CI setup, would be the Azure Pipeline 
as it provides virtually unlimited resources and would automate the build process. The team could use Travis CI as it provides multiple runtimes (e.g., Node.js or Php versions.) 
and the application could be tested against multiple runtimes and data stores. But even if this team is considered small/ medium sized. 
The imaginary application that is being build in this scenario is such complex and the team is looking for complete control over the project, 
they are going to use a self-hosted CI setup.
 
