#!groovy

pipeline {
    agent any
    tools {
        nodejs 'Node 4.3.2'
    }
    environment { 
        AWS_REGION = 'eu-west-1'
    }

    stages {
        stage('Unit Test'){
            steps {
                sh 'npm run unit'
            }
        }
        stage('Dev') { 
            environment { 
                AWS_STAGE = 'dev'
            }
            steps { 
                sh 'npm i'
                sh 'npm run deploy -- dev'
                sh 'npm run integration'
            }
        }
        stage('Test') {
            environment { 
                AWS_STAGE = 'test'
            }
            steps { 
                sh 'npm i'
                sh 'npm run deploy -- test'
                sh 'npm run integration'
            }
        }
        stage('Prod'){
            environment { 
                AWS_STAGE = 'prod'
            }
            steps {
                sh 'AWS_REGION=eu-west-1 AWS_STAGE=prod'
                sh 'npm run deploy -- prod'
            }
        }
    }
}