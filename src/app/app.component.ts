import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  itemRef: AngularFireObject<any>;
  item: Observable<any>;
  constructor(public afAuth:AngularFireAuth, public db: AngularFireDatabase) {
    this.itemRef = db.object('item');
    this.item = this.itemRef.valueChanges();
  }
  save(newName: string) {
    this.itemRef.set({ name: newName });
  }
  update(newSize: string) {
    this.itemRef.update({ size: newSize });
  }
  delete() {
    this.itemRef.remove();
  }
  login() {
   this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
 }
 logout() {
   this.afAuth.auth.signOut();
 }
}
