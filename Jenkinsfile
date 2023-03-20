pipeline {
    agent any
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
 }
