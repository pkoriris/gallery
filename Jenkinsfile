pipeline {
    agent any
    environment {

        EMAIL_BODY = 

        """

            <p>EXECUTED: Job <b>\'${env.JOB_NAME}:${env.BUILD_NUMBER})\'</b></p>

            <p>

            View console output at 

            "<a href="${env.BUILD_URL}">${env.JOB_NAME}:${env.BUILD_NUMBER}</a>"

            </p> 

            <p><i>(Build log is attached.)</i></p>

        """

        EMAIL_SUBJECT_SUCCESS = "Status: 'SUCCESS' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'" 

        EMAIL_SUBJECT_FAILURE = "Status: 'FAILURE' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'" 

        EMAIL_RECEPIENT = 'kipkoririsco@gmail.com'

    }
    tools {nodejs "node"}
    
    stages {
        stage('Start') {
            steps {
                echo 'Building'
            }
        }
        stage('Clone github repository') {
            steps {
                git url: 'https://github.com/pkoriris/gallery.git', branch: 'master'
            }
        }
        
        stage('Install dependencies') {
            steps {
                sh 'npm install'
                sh 'npm config set strict-ssl false'
            }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'https://api.render.com/deploy/srv-cgca25pmbg55nqi3f820?key=H-1vIhlale4'
            }
        }
        stage('End') {
            steps {
                echo 'Build is finished'
            }
        }
    }
    post {
        success {
            emailext attachLog: true, 
                body: EMAIL_BODY, 

                subject: EMAIL_SUBJECT_SUCCESS,

                to: EMAIL_RECEPIENT
        }

        failure {
            emailext attachLog: true, 
                body: EMAIL_BODY, 

                subject: EMAIL_SUBJECT_FAILURE, 

                to: EMAIL_RECEPIENT
        }
    }
}