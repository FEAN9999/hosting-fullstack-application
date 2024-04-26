# Infrastructure Description

### AWS Cloud Setup

- RDS - Database Host: database-1.c0c3p98ji464.us-east-1.rds.amazonaws.com
- RDS - Database Port: 5432
- RDS - Database Name: postgres

- S3 Endpoint - Frontend: http://phatnv-udagram.s3-website-us-east-1.amazonaws.com/

- Elastic Beanstalk URL - Backend: http://udagram-api-dev.eba-cku2zvgp.us-east-1.elasticbeanstalk.com/

## Environment Variables

Setup the following variables in the .env file or in the cloud environments:

```
- DB_PORT             = 5432
- PORT                = 8080
- POSTGRES_HOST       = <Database_IP_Address>
- POSTGRES_DB         = <Database_Name>
- POSTGRES_USERNAME   = <Database_Username>
- POSTGRES_PASSWORD   = <Database_Password>
- URL                 = <Url>
- JWT_SECRET          = <your secret>
- AWS_REGION          = <us-east-1>
- AWS_PROFILE         = <Profile>
- AWS_BUCKET          = <Bucket_Name>
- AWS_ACCESS_KEY_ID   = <Your access key>
- AWS_SECRET_ACCESS_KEY = <Your secret key>
```
