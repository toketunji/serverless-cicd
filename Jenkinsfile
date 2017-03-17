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
                sh './node_modules/.bin/sls deploy -s dev'
                sh 'npm run integration'
            }
        }
        stage('Test') {
            environment { 
                AWS_STAGE = 'test'
            }
            steps { 
                sh 'npm i'
                sh './node_modules/.bin/sls deploy -s test'
                sh 'npm run integration'
            }
        }
        stage('Prod'){
            environment { 
                AWS_STAGE = 'prod'
            }
            steps {
                sh './node_modules/.bin/sls deploy -s prod'
            }
        }
    }
}