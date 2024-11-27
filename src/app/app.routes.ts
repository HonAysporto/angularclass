import { Routes } from '@angular/router';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { TazerComponent } from './tazer/tazer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';
import { EditcontactComponent } from './editcontact/editcontact.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DisplayComponent } from './display/display.component';
import { ParentbehavioursubjectComponent } from './parentbehavioursubject/parentbehavioursubject.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NoteappComponent } from './noteapp/noteapp.component';
import { NotedetailsComponent } from './notedetails/notedetails.component';
import { EditnoteComponent } from './editnote/editnote.component';
import { SiginproComponent } from './siginpro/siginpro.component';
import { SignupproComponent } from './signuppro/signuppro.component';
import { DashboardproComponent } from './dashboardpro/dashboardpro.component';
import { studentGuard } from './guards/student.guard';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { EventparentComponent } from './eventparent/eventparent.component';
import { AddcoursesComponent } from './addcourses/addcourses.component';
import { ViewclassmatesComponent } from './viewclassmates/viewclassmates.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ProceedresetpasswordComponent } from './proceedresetpassword/proceedresetpassword.component';
import { PipeComponent } from './pipe/pipe.component';
import { MaterialComponent } from './material/material.component';
import { NotekeepComponent } from './notekeep/notekeep.component';
import { UploadreciptComponent } from './uploadrecipt/uploadrecipt.component';
import { ManagereceiptComponent } from './managereceipt/managereceipt.component';
import { StepperformComponent } from './stepperform/stepperform.component';

export const routes: Routes = [

    {path:'', component:LandingpageComponent},
    {path:'contact', component:EditComponentComponent},
    {path:'display', component:DisplayComponent},
    {path:'behaviour', component:ParentbehavioursubjectComponent},
    {path:'eventparent', component:EventparentComponent},
    {path:'templatevalidate', component:TemplateformComponent},
    {path:'reactiveform', component:ReactiveFormComponent},
    {path:'studentsignin', component:SiginproComponent},
    {path:'studentsignup', component:SignupproComponent},
    {path:'adminsignup', component:AdminsignupComponent},
    {path:'adminsignin', component:AdminsigninComponent},
    {path:'admindashboard', component:AdmindashboardComponent},
    {path:'managerecipts', component:ManagereceiptComponent},
    {path:'stepperform', component:StepperformComponent},

    {path:'reset', component:UpdateProfileComponent},
    {path:'forgotpassword', component:ForgotpasswordComponent},
    {path:'material', component:MaterialComponent},
    {path:'proceedforgotpassword', component:ProceedresetpasswordComponent},
    {path:'pipe', component:PipeComponent},
    {path:'studentdashboard', children:[
        {path:'',   component:DashboardproComponent, canActivate:[studentGuard]},
        {path:'changepassword', component:ChangepasswordComponent},
        {path:'addcourses', component:AddcoursesComponent},
        {path:'viewclassmates', component:ViewclassmatesComponent},
        {path:'editprofile', component:EditprofileComponent},
        {path:'notekeep', component:NotekeepComponent},
        {path:'uploadrecipt', component:UploadreciptComponent},
    ]},
  
    {path:'noteapp', children:[
        {path:'', component:NoteappComponent},
        {path: ':index', component:NotedetailsComponent},
        {path:'edit/:index', component:EditnoteComponent}
    ]},

    {path:'tazer', children:[
        {path:'', component:TazerComponent},
        {path:'viewcontact', component:ViewcontactComponent},
        {path:'edit/:index', component:EditcontactComponent}
    ]},

    {path:'Tazer', redirectTo:'tazer', pathMatch:'full'},
    {path:'dashboard', children:[
        {path:'', component:DashboardComponent},
        {path:'profile', children:[
            {path:'', component:ProfileComponent},
            {path:'update-profile', component:UpdateProfileComponent}
            

        ]}
    ]},


    {path:'**', component:ErrorpageComponent}

];

