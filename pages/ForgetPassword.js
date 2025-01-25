export default class ForgetPassword {
    constructor(page){
        this.page = page;
        this.resetLink = page.getByRole('link', { name: 'Reset it here' })
        this.enterEmail = page.getByLabel('Email *');
        this.sendRestLinkBtn = page.getByRole('button', { name: 'Send Reset Link' });
        this.newPassword = page.getByLabel('New Password *');
        this.confirmPassword = page.getByLabel('Confirm Password *');
        this.resetPasswordBtn = page.getByRole('button', { name: 'Reset Password' });
        //await page.getByText('Error resetting password').click();
    }
    async addDailyCost(){

        await this.resetLink.click();
        await this.enterEmail.fill();
        await this.sendRestLinkBtn.click();
        await this.newPassword.fill();
        await this.confirmPassword.fill();
        await this.resetPasswordBtn.click();
       }
}