#!groovy

pipeline {
    agent any
    tools {
        nodejs 'Node 4.3.2'
    }

    stages {
        stage('Unit Test'){
            steps {
                sh 'npm run unit'               
            }
        }
        stage('Deploy') { 
            steps { 
                sh 'npm i'
                sh 'npm run deploy-dev' 
            }
        }
        stage('Integration Test'){
            steps {
                sh 'npm run integration-dev'               
            }
        }
    }
}