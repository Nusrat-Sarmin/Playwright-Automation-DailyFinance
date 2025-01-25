
export default class ProfileUpdate {
    constructor(page){
        this.page = page;
        this.currentProfile = page.getByRole("button",{name : "account of current user"});
        this.profileBtn = page.getByRole('menuitem', { name: 'Profile' });
        this.editBtn = page.getByRole('button', { name: 'Edit' });
        this.profilePicture = page.locator('input[type="file"]');
        this.uploadImage = page.getByRole('button', { name: 'Upload Image' });
        this.updateBtn = page.getByRole('button', { name: 'Update' });
        this.logoutBtn = page.getByRole('menuitem', { name: 'Logout' });
 

    }
}