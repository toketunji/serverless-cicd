#!groovy

pipeline {
    agent any
    tools {
        nodejs 'Node 4.3.2'
    }

    stages {
        stage('Deploy') { 
            steps { 
                sh 'npm i'
                sh 'npm run deploy-dev' 
            }
        }
        stage('Test'){
            steps {
                sh 'echo hello'               
            }
        }
        stage('Stuff') {
            steps {
                sh 'echo hello'               
            }
        }
    }
}