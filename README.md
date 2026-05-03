# 🚀 End-to-End CI/CD Pipeline using Jenkins, Docker & Docker Hub (WSL Environment)

## 📌 Overview
This project demonstrates a fully automated **CI/CD pipeline** using Jenkins and Docker, where the application is built, containerized, and deployed automatically.

The entire setup is executed using **WSL (Windows Subsystem for Linux)** to simulate a real Linux-based DevOps environment on Windows.

---

## 🎯 Objective
- Automate build and deployment workflow using CI/CD
- Containerize application using Docker
- Push Docker images to Docker Hub registry
- Deploy containers using Jenkins pipeline
- Practice real-world DevOps workflow using WSL

---

## 🛠️ Tech Stack

- 🟡 Jenkins (CI/CD Automation)
- 🐳 Docker (Containerization)
- ☁️ Docker Hub (Image Registry)
- 🐧 WSL (Linux Environment on Windows)
- 💻 Ubuntu (WSL Distribution)
- 🔧 Git & GitHub (Version Control)

---

## ⚙️ Pipeline Workflow

1. Code pushed to GitHub repository  
2. Jenkins triggers pipeline (Webhook / SCM polling)  
3. Source code pulled into WSL environment  
4. Docker image is built inside WSL  
5. Image is tagged and pushed to Docker Hub  
6. Jenkins deploys the container from Docker image  

---

## 📂 Project Structure

```bash
project/
│── app/               # Application source code
│── Dockerfile         # Docker image configuration
│── Jenkinsfile        # CI/CD pipeline script
│── README.md          # Documentation
