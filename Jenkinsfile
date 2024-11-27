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
                bat 'npx cypress run --headless --browser chrome --env tags=%TAGS%'
            }
        }
    }

        post {
            always {
            // cucumber '**/cucumber-report.json skippedAsNotFailingStatus=true'
            cucumber(
                fileIncludePattern: '**/cucumber-report.json', // Path to your cucumber.json report
                skippedAsNotFailingStatus: true // Treat skipped steps as non-failing
            )
        }
        }
}
