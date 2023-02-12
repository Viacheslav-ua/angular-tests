import { TestBed } from "@angular/core/testing";
import { CheckValueService } from "./check-value.service"

describe('Сервис проверки значения ', () => {

  let service: CheckValueService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CheckValueService,
      ],
    })

    service = TestBed.inject(CheckValueService)
  })

  it('должен создавать єкземпляр класса', () => {
    expect(service).toBeTruthy()
  })

  it('должен проверять значение', () => {
    const value = service.check();
    expect(value).toBeTruthy();
  })

})
