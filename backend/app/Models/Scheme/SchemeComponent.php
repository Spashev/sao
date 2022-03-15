<?php


namespace App\Models\Scheme;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class SchemeComponent extends Model
{
    protected $table = 'scheme_components';

    protected $fillable = [
        'comp_name',
        'comp_desc',
        'change_logs',
        'is_active',
        'template_id'
    ];

//    public $timestamps = false;
//    protected $primaryKey = 'comp_id';

    public function statuses(){
        return $this->hasMany(SchemeStatus::class);
    }

    public function actions(){
        return $this->hasMany(SchemeAction::class);
    }

    public function userCategories(){
        return $this->hasMany(SchemeUserCategory::class);
    }

    public function userFields(){
        return $this->hasMany(SchemeUserField::class);
    }

    public function userGroups(){
        return $this->hasMany(SchemeUserGroup::class);
    }

    public function fields(){
        return $this->hasMany(SchemeField::class);
    }

    /**
     * Возвращает массив содержащий имена компонентов
     *
     * @param  Array $id - массив с id компонентов
     *
     * @return Array
     */
    public static function getComponentsName($id = [])
    {
        $componentsName = self::select('id_comp', 'comp_name', 'comp_desc')->whereNull('deleted_at');
        empty($id) ?: $componentsName->whereIn('id_comp', $id);
        return $componentsName->orderBy('id_comp')->get();
    }

    /**
     * Добавляет в базу новый компонент и возвращает id созданного компонента, иначе возвращает 0
     *
     * @param  Integer $userId - id пользователя вносящего изменения
     * @param  String $name - Имя компонента
     * @param  String $description - Комментарий к компоненту
     *
     * @return Integer
     */
    public static function createComponent($userId, $name, $description = null)
    {
        $componentData = [
            'name' => $name
        ];
        is_null($description) ?: $componentData['description'] = $description;

        $component = new SchemeComponent();
        $component->comp_name = $componentData['name'];
        $component->comp_desc = $componentData['description'];
        if($component->save()){
            return $component->id_comp;
        }else{
            return 0;
        }
    }

    /**
     * Изменение записи о компоненте, иначе возвращает false
     *
     * @param  Integer $userId - id пользователя вносящего изменения
     * @param  Integer $id - id компонента
     * @param  String $name - Имя компонента
     * @param  String $description - Комментарий к компоненту
     *
     * @return Boolean
     */
    public static function editComponentName($userId, $id, $name = null, $description = null)
    {
        if (!self::checkName($name) && !is_null($name)) {
            return false;
        }
        $componentData = [
            'updated_at' => Carbon::now()->toW3cString(),
        ];
        is_null($name) ?: $componentData['comp_name'] = $name;
        is_null($description) ?: $componentData['comp_desc'] = $description;
        return empty($componentData) ? false : boolval(SchemeComponent::where('id', $id)->update($componentData));
    }

    /**
     * Мягкое удаление записи о компоненте
     *
     * @param  Integer $userId - id пользователя вносящего изменения
     * @param  Integer $id - id группы
     *
     * @return Boolean
     */
    public static function softDeleteComponentName($userId, $id)
    {
        $dataTime = Carbon::now()->toW3cString();
        $componentData = [
            'updated_at' => $dataTime,
            'deleted_at' => $dataTime,
        ];
        return boolval(self::where('id', $id)->update($componentData));
    }

    /**
     * Возвращает результат проверки доступности имени для регистрации
     *
     * @param  String $name
     *
     * @return Boolean
     */
    public static function checkName($name)
    {
        if (empty($name)) {
            return false;
        }
        $result = SchemeComponent::select('id')->whereRaw("LOWER(comp_name)=LOWER('$name')");
        return is_null($result->value('id'));
    }
}
