pipeline {
    agent any

    environment {
        FRONTEND = "sujith1ns/devops-html"
        BACKEND = "sujith1ns/devops-backend"
    }

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/SUJITH-NS/devrewjen.git'
            }
        }

        stage('Build') {
            steps {
                sh 'docker build -t $FRONTEND .'
                sh 'docker build -t $BACKEND -f Dockerfile.backend .'
            }
        }

        stage('Login DockerHub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'USER',
                    passwordVariable: 'PASS'
                )]) {
                    sh 'echo $PASS | docker login -u $USER --password-stdin'
                }
            }
        }

        stage('Push') {
            steps {
                sh '''
                docker push $FRONTEND || true
                docker push $BACKEND || true
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker stop frontend || true
                docker rm frontend || true
                docker stop backend || true
                docker rm backend || true

                docker run -d -p 5000:5000 --name backend $BACKEND
                docker run -d -p 8082:80 --name frontend $FRONTEND
                '''
            }
        }
    }
}
