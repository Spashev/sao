<div style="background:#dcdcdc94; height:100%; ">
    <div style="padding:10px 20px;">
        <div style="background: #f5f5f5; border:0.3px solid #e1e1e1;">
            <h3 style="padding:10px 20px; margin:0;">ESUR Trouble Ticket System: Сервис тикет #{{ $id }}</h3>
        </div>

        <div style="background: #f5f5f5; border:0.3px solid #e1e1e1;">
            <table style="width:100%;">
                <tr>
                    <td style="border: 1px solid #dfdede; text-align: right; padding: 5px 15px; width: 30%;">
                        ID
                    </td>
                    <td style="padding:5px 10px; border: 1px solid #dfdede; background: #f3f3f3;">
                        {{ $id }}
                    </td> 
                </tr>
                <tr>
                    <td style="border: 1px solid #dfdede; text-align: right; padding: 5px 15px; width: 30%;">
                        Статус
                    </td>
                    <td style="padding:5px 10px; border: 1px solid #dfdede; background: #f3f3f3;">
                        {{ $status_name }}
                    </td> 
                </tr>
                <tr>
                    <td style="border: 1px solid #dfdede; text-align: right; padding: 5px 15px; width: 30%;">
                        Тип тикета
                    </td>
                    <td style="padding:5px 10px; border: 1px solid #dfdede; background: #f3f3f3;">
                        {{ $tt_type }}
                    </td> 
                </tr>
                <tr>
                    <td style="border: 1px solid #dfdede; text-align: right; padding: 5px 15px; width: 30%;">
                        Приоритет
                    </td>
                    <td style="padding:5px 10px; border: 1px solid #dfdede; background: #f3f3f3;">
                        {{ $priority }}
                    </td> 
                </tr>
                <tr>
                    <td style="border: 1px solid #dfdede; text-align: right; padding: 5px 15px; width: 30%;">
                        Сеть
                    </td>
                    <td style="padding:5px 10px; border: 1px solid #dfdede; background: #f3f3f3;">
                        {{ $network }}
                    </td> 
                </tr>
                <tr>
                    <td style="border: 1px solid #dfdede; text-align: right; padding: 5px 15px; width: 30%;">
                        Подсеть
                    </td>
                    <td style="padding:5px 10px; border: 1px solid #dfdede; background: #f3f3f3;">
                        {{ $subnetwork }}
                    </td> 
                </tr>
                <tr>
                    <td style="border: 1px solid #dfdede; text-align: right; padding: 5px 15px; width: 30%;">
                        Сервисы 
                    </td>
                    <td style="padding:5px 10px; border: 1px solid #dfdede; background: #f3f3f3;">
                        {{ $services }}
                    </td> 
                </tr>
                <tr>
                    <td style="border: 1px solid #dfdede; text-align: right; padding: 5px 15px; width: 30%;">
                        Объект
                    </td>
                    <td style="padding:5px 10px; border: 1px solid #dfdede; background: #f3f3f3;">
                        {{ $source_name }}
                    </td> 
                </tr>
                <tr>
                    <td style="border: 1px solid #dfdede; text-align: right; padding: 5px 15px; width: 30%;">
                        Расположение объекта
                    </td>
                    <td style="padding:5px 10px; border: 1px solid #dfdede; background: #f3f3f3;">
                        {{ $source_city }}
                    </td> 
                </tr>
                <tr>
                    <td style="border: 1px solid #dfdede; text-align: right; padding: 5px 15px; width: 30%;">
                        Влияние на сервис
                    </td>
                    <td style="padding:5px 10px; border: 1px solid #dfdede; background: #f3f3f3;">
                        {{ $affection }}
                    </td> 
                </tr>
                <tr>
                    <td style="border: 1px solid #dfdede; text-align: right; padding: 5px 15px; width: 30%;">
                        Кол-во вне сервиса
                    </td>
                    <td style="padding:5px 10px; border: 1px solid #dfdede; background: #f3f3f3;">
                        {{ $out_of_service }}
                    </td> 
                </tr>
                <tr>
                    <td style="border: 1px solid #dfdede; text-align: right; padding: 5px 15px; width: 30%;">
                        Бренд
                    </td>
                    <td style="padding:5px 10px; border: 1px solid #dfdede; background: #f3f3f3;">
                        {{ $influence }}
                    </td> 
                </tr>
                <tr>
                    <td style="border: 1px solid #dfdede; text-align: right; padding: 5px 15px; width: 30%;">
                        Время начала
                    </td>
                    <td style="padding:5px 10px; border: 1px solid #dfdede; background: #f3f3f3;">
                        {{ $start_date }}
                    </td> 
                </tr>
                <?php if(($status_id == 5)&&(isset($finish_date))): ?>
                    <tr>
                        <td style="border: 1px solid #dfdede; text-align: right; padding: 5px 15px; width: 30%;">
                            Время закрытия
                        </td>
                        <td style="padding:5px 10px; border: 1px solid #dfdede; background: #f3f3f3;">
                            {{ $finish_date }}
                        </td> 
                    </tr>
                <?php endif; ?>
                <tr>
                    <td style="border: 1px solid #dfdede; text-align: right; padding: 5px 15px; width: 30%;">
                        Регистратор
                    </td>
                    <td style="padding:5px 10px; border: 1px solid #dfdede; background: #f3f3f3;">
                        {{ $responsible }}
                    </td> 
                </tr>
                <tr>
                    <td style="border: 1px solid #dfdede; text-align: right; padding: 5px 15px; width: 30%;">
                        Предп. причина
                    </td>
                    <td style="padding:5px 10px; border: 1px solid #dfdede; background: #f3f3f3;">
                        {{ $probable_cause }}
                    </td> 
                </tr>
                <tr>
                    <td style="border: 1px solid #dfdede; text-align: right; padding: 5px 15px; width: 30%;">
                        Описание проблемы
                    </td>
                    <td style="padding:5px 10px; border: 1px solid #dfdede; background: #f3f3f3;">
                        {{ $description }}
                    </td> 
                </tr>
                <tr>
                    <td style="border: 1px solid #dfdede; text-align: right; padding: 5px 15px; width: 30%;">
                        Ссылка на тикет
                    </td>
                    <td style="padding:5px 10px; border: 1px solid #dfdede; background: #f3f3f3;">
                        <a href=" {{ $link }} ">Тикет #{{ $link }}</a>
                    </td> 
                </tr>
            </table>    
        </div>
    </div>   
</div>