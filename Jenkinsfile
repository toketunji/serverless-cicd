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
        stage('Deploy DEV') { 
            steps { 
                sh 'AWS_REGION=eu-west-1 AWS_STAGE=dev'
                sh 'npm i'
                sh 'npm run deploy -- -s dev' 
            }
        }
        stage('Integration Test DEV'){
            steps {
                sh 'AWS_REGION=eu-west-1 AWS_STAGE=dev'
                sh 'npm run integration'               
            }
        }
        stage('Deploy TEST') { 
            steps { 
                sh 'AWS_REGION=eu-west-1 AWS_STAGE=test'
                sh 'npm i'
                sh 'npm run deploy -- -s dev' 
            }
        }
        stage('Integration Test DEV'){
            steps {
                sh 'AWS_REGION=eu-west-1 AWS_STAGE=test'
                sh 'npm run integration'               
            }
        }
    }
}