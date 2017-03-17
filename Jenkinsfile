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
        stage('Dev') { 
            steps { 
                environment { 
                  AWS_STAGE = 'dev'
                }
                sh 'npm i'
                sh 'npm run deploy -- dev'
                sh 'npm run integration'
            }
        }
        stage('Test') { 
            steps { 
                sh 'AWS_REGION=eu-west-1 AWS_STAGE=test'
                sh 'npm i'
                sh 'npm run deploy -- test'
                sh 'npm run integration'
            }
        }
        stage('Prod'){
            steps {
                sh 'AWS_REGION=eu-west-1 AWS_STAGE=prod'
                sh 'npm run deploy -- prod'
            }
        }
    }
}