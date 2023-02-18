import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, Subject, throwError } from 'rxjs';
import { DependencyService } from '../dependency/dependency.service';

@Component({
  selector: 'app-async-ng-example',
  templateUrl: './async-ng-example.component.html',
  styleUrls: ['./async-ng-example.component.css']
})
export class AsyncNgExampleComponent {
 name = "";
  subjectExample: Subject<string> = new Subject<string>();

  constructor(private ds: DependencyService) { }

  setNameWithPromise(name: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.name = name;
      resolve();
    });
  }

  asyncExample(name?: string): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!name) {
        reject("имя не указано");
        return;
      }
      setTimeout(() => resolve(name), 1000);
    });
  }

  sayHiAsync(name: string): Promise<string> {
    return this.ds.asyncExample().then(result => {
      return `${result}, ${name}!`;
    }, () => {
      return "сервис вернул ошибку";
    });
  }

  promiseExample(name?: string): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!name) {
          reject("нет имени");
          return;
        }

        this.name = name;
        resolve();
      }, 3000);
    });
  }

  observableExample(name?: string): Observable<string> {
    if (!name) {
      return throwError("нет имени");
    }
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(name);
        observer.complete();
      }, 1000);
    });
  }

  subjectExampleMethod(name: string): void {
    this.subjectExample.next(name);
  }

  sayHiObservable(name: string): Observable<string> {
    return this.ds.observableExample()
      .pipe(
        catchError(() => throwError("сервис временно недоступен")),
        map(result => `${result}, ${name}!`)
      );
  }

  setNameAfterMinute(name: string): void {
    setTimeout(() => {
      this.name = name;
    }, 60000);
  }


}
