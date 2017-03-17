#!groovy

pipeline {
    agent any 

    stages {
        stage('Deploy') { 
            steps { 
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