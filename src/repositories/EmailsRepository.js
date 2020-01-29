export class EmailsRepository {
    
    constructor(emails){
        this.emails = emails;
    }

    create = (email) => {
        return this.emails.create(email)
    }

    delete = (emailId) => {
        return this.emails.destroy({
            where: { id: emailId }
        })
    }

    findEmailById = (emailId) => {
        return this.emails.findOne({
            where: {
                id: emailId
            }
        })
        .then((emailFound) => {
            const hasEmail = emailFound && emailFound.dataValues
            if (hasEmail) {
                return emailFound.dataValues
            }
            throw new Error(`Email id ${emailId} not found`)
        })
        
    }


    getAllEmailsBySender = (sender) => {
        return this.emails.findAll({
            where: {
                from: sender
            }
        })
        .then((emailsFound) => {
            const hasEmails = emailsFound.length
            if (hasEmails) {
                return emailsFound
            }
            else {
                return []
            }
            //throw new Error(`Emails from sender ${sender} not found`)
        })
    }

}