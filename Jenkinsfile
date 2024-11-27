pipeline {
    agent any

    environment {
        // Set the location of the Allure results folder if necessary
        ALLURE_RESULTS = './allure-results'
    }

    stages {
        stage('Checkout Source') {
            steps {
                // Pull code from the Git repository configured in the Jenkins job
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Run npm install to install dependencies
                    bat 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                // Run Cypress tests
                bat 'npx cypress run --headless --browser chrome --spec %SPEC_FILES% --record --key 0aba12cc-bca1-4d48-b421-7a37fa2f5c57'
            }
        }
    }

        post {
            always {
                allure includeProperties:
                    false,
                    jdk: '',
                    results: [[path: './allure-results']]
            }
        }
}
